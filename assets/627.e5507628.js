const a=[.06,.27,.68,.17,.01,.04,.65,.01,0,.01,.01,0,.14,.1,.07,.31,.06,.96,.42,.7,.75,0,.72,.13,0,0,0,.3,.52,0,.49,0,.02,.67,0,.39,.09,.06,.03,.52,.6,0,.03,.44,.61,.32,.53,.06,.58,0,0,.12,.73,.13,.43,0,.03,.92,.11,.06,.03,.03,.01,.23,.66,0,0,.12,.96,.54,.77,.04,.01,.28,.03,.17,.63,.03,.21,.34,.15,.09,.95,0,.02,0,0,.8,.04,.44,.15,.77,0,.39,.33,.75,.08,.02,.04,.01,.62,.06,.88,.63,.13,.63,.65,.7,.02,.99,.99,.01,.52,.89,0,.18,.06,.02,.1,0,.18,.2,.01,.7,.1,.01,.28,0,.06,.01,.08,.92,.36,.02,.99,.23,.01,.02,.02,.22,0,.69,0,0,.7,.31,.93,.05,.02,.2,.07,0,.45,.72,0,.35,.02,.09,.25,.05,.21,.55,.36,.38,0,.02,.17,.05,.17,.02,.33,.24,.1,.01,.04,0,.34,.05,.04,.16,.33,.35,.58,.86,.2,.32,.59,.69,.01,.35,.2,.02,.22,0,0,.77,.82,.2,.74,0,0,0,0,.46,.18,.58,.03,.12,.09,.97,0,.06,.1,.01,.82,.06,.84,0,0,.7,.89,.2,.54,.24,.22,.01,.03,.01,.59,.33,.59,.2,0,.58,.07,1,.03,.05,.74,.94,0,.18,0,.03,0,0,.29,.07,.79,.37,.46,.48,.21,.76,.01,.66,.75,.14,.73,.97,.12,.19,.07,0,.12,.37,.12,0,.04,0,0,.12,.01,.59,.72,.62,.15,.01,.17,.41,.01,.12,.06,.27,.85,.01,.06,0,.09,0,.2,0,.01,0,.37,.05,0,0,.07,.85,.47,.17,0,.64,.11,.01,0,.04,.62,0,0,.5,.48,.75,.03,.63,.39,.04,.86,.57,0,.02,.03,.03,.3,.87,.04,.28,.68,.72,.51,.14,.29,.13,.01,.42,.06,.56,0,0,0,.15,.84,.28,.04,.57,.15,.16,0,.01,.06,.16,.45,.99,.21,.04,.71,.59,.83,.83,0,.01,.74,.79,.45,.04,.5,.01,.01,.32,.04,.29,0,.21,.21,.35,0,.01,.94,.26,.79,.02,.38,.01,.47,.18,.48,.01,.94,.27,.52,.35,.62,.06,.04,.09,.01,.2,.16,.05,.02,.89,.51,.01,.17,.29,.02,.76,.33,.8,.84,.35,.07,.58,.21,.69,0,.82,.01,.37,.29,.06,.04,.52,.03,.01,.1,.4,.15,.21,0,.03,0,.25,.18,.02,0,.03,.01,.43,.21,0,0,.03,0,.01,.24,0,0,.02,0,.03,0,.13,.91,.45,0,.02,.77,0,.23,.06,.11,.04,.52,0,.32,.03,.01,.36,.39,.02,.65,.62,.05,.03,0,0,.95,.01,.18,.01,.66,0,0,.66,.81,1,1,.26,.27,0,.6,.83,.1,.01,.91,.14,.68,.44,.05,.15,.89,.12,0,.42,.64,.77,.26,0,.01,.84,0,.68,0,0,.32,.02,.03,.03,.12,.28,.05,.23,.69,.25,.4,.62,.51,.01,.1,.83,.02,.08,.38,.26,.65,.5,.11,.01,.54,.04,.4,.01,.78,.29,.42,0,.24,.11,.1,.01,.06,.23,0,.24,0,0,.38,.14,.96,0,.03,.04,.05,.94,.89,.14,.28,.05,.92,.94,.01,.01,.14,.12,.14,0,.01,.92,.69,.66,.04,.93,.32,.05,.09,.3,.13,.11,.23,.29,.92,.63,.02,0,.14,.3,.31,.02,.7,.01,.31,.28,.13,0,.02,.39,.45,.46,.42,.25,.17,.03,.82,.33,.13,0,.55,.79,.97,.14,.97,.02,.42,0,0,.42,.09,.02,.32,.23,.78,.13,.13,.63,.09,0,.04,0,.27,.02,.01,.8,.74,.01,.44,.01,0,.29,.26,0,0,.03,.03,.36,.59,.85,.51,.07,.13,.05,.04,.16,.55,.08,.21,.62,0,0,0,.3,.67,0,.9,.22,.02,.01,.02,.57,.06,.11,.38,.05,.81,.22,.47,0,0,.97,.46,.07,.47,.92,.2,.84,.93,.89,.26,.09,.01,0,0,0,.47,.01,.29,.08,.7,0,.01,.01,.19,.05,.04,.83,0,.46,.96,.34,0,.4,.2,.38,.04,.73,.35,0,.02,.65,.06,.3,.26,.27,0,.01,.02,.56,.48,.9,.87,.74,0,0,.05,.03,0,.22,.27,0,.03,0,.03,.05,.61,.42,.01,.93,.65,.76,.49,.02,.02,.95,.79,.09,.08,.83,.92,.8,.34,.53,.03,.93,.06,.27,.81,0,.02,0,.92,.06,.02,0,.46,.7,.35,.02,0,0,0,.87,.55,.21,.01,.05,.24,0,.86,.84,0,.77,.61,.1,.41,.22,0,.08,.04,.55,.47,.41,.21,0,.04,0,1,.86,.77,.02,.68,.02,.04,.09,.02,.03,.64,.57,.95,.94,.09,0,.58,0,.54,0,.91,.46,.54,0,.6,.08,.64,.01,0,.67,.29,.05,0,.12,.68,0,0,.29,.67,.29,.09,.04,0,0,0,0,.01,.29,.23,.13,.24,.15,0,0,.44,.06,.23,.06,.76,.03,.28,.51,.25,.44,0,.03,.31,.01,.03,.04,.88,.24,.08,0,.01,.11,.2,.14,.09,.26,.13,.43,.66,0,.35,.3,.75,.13,.6,0,.29,.03,.41,.03,.36,.01,0,.15,.12,.28,.12,.03,.02,.4,.79,.29,.48,.34,.04,.04,.3,.07,.61,.03,.02,.59,.37,0,0,.32,.09,.08,.63,.01,.2,0,.66,0,.73,.6,0,.82,.42,.02,0,.82,.41,0,0,0,.01,.15,0,.03,.01,.79,0,.55,.57,.06,.77,.28,.43,.44,.24,.08,.58,.03,.11,.05,.28,.34,.02,.48,.01,.01,.01,0,.02,0,.05,.91,.17,.79,0,.05,.03,0,.44,.26,.21,.15,.6,.74,.67,.98,.09,.47,.79,.99,.39,.88,.67,.26,.32,.01,.33,.04,.7,.47,0,.54,.17,.63,0,.64,0,.12,.01,.13,.04,0,.52,.83,.02,.25,.46,.82,.86,0,0,0,.19,.42,.38,.08,.21,.34,.93,.08,.56,.47,.17,.96,.05,0,.42,.53,0,.17,.01,.12,.72,.01,.07,.38,.06,.01,0,.88,.03,0,.27,.76,.1,.33,.43,.84,.01,0,.33,.8,.04,.01,.36,0,.26,.9,.04,.1,.01,.53,0,0,.28,.26,.02,0,.18,.07,.04,.7,.02,.03,.39,.06,.21,0,.91,.05,0,.1,.62,0,.74,.02,0,.8,0,.19,.18,0,.73,.02,.03,.14,.02,.82,.11,.47,.66,.63,.13,.04,.06,.12,.02,.63,.25,.04,.02,.53,.87,.13,0,0,0,.07,.02,.7,.01,.25,.69,0,.37,0,.26,.94,.67,.53,.6,.16,.58,.88,0,.03,.04,.01,.02,.75,.01,.13,.85,0,.88,.22,.09,.89,.13,.02,.03,.14,0,.07,.08,.54,.02,.34,.83,.42,.02,.02,.03,.23,.51,.73,.55,.01,.05,.3,.35,.35,.21,0,.89,.51,.53,.17,.5,.1,.04,.74,.62,.02,.77,.18,.19,.06,.32,.09,.14,0,.11,.74,.84,0,.51,.73,.6,.07,.95,.05,.95,.14,.08,.84,.16,.76,.08,0,.01,.98,.5,.83,.02,.01,.89,.47,.76,.29,.26,.96,0,.74,.12,.9,.21,.11,.15,0,.13,.14,0,.81,.01,.18,0,.63,.26,.94,0,.03,0,.2,.51,.49,.44,.86,.13,.02,.58,.11,.01,.75,.01,.03,.06,.01,.03,.87,.09,.28,.33,.8,.5,0,.01,.06,.96,.93,0,.85,0,.13,.01,.07,0,.18,.26,.63,.05,.4,.01,.05,.48,.11,.09,.75,.84,.44,.07,.25,.02,.53,.1,.69,.71,.18,.57,.63,.53,.01,.51,.03,.35,.06,1,0,.42,.19,.66,.8,.65,.01,0,.51,.96,.04,.14,.54,.79,.03,.71,.23,.43,.72,.92,.31,.09,.64,.74,.03,.07,.48,.1,.75,.53,.84,.07,.45,.02,.11,0,0,.02,.7,.57,.07,.04,.17,.83,.5,.39,.52,.53,.67,.55,.45,.35,.32,.23,.11,.06,.24,.2,.16,.03,.06,.01,0,.07,.04,.01,.88,.01,.96,.34,.74,.51,.04,.1,.01,.48,.69,.2,.21,1,.38,.28,.01,.75,.71,.19,.93,.14,.89,.61,.06,0,.38,.13,.71,.44,0,.33,.04,.1,0,0,0,.24,.01,0,.46,0,.7,.06,0,.06,.45,.63,.35,.57,.01,.02,0,.84,0,0,.01,.8,.16,0,.83,.05,.26,.59,0,.37,.27,.11,.65,.01,.01,.33,.55,.84,0,.32,.38,.14,.16,.21,.55,.65,.02,.36,.3,.81,.72,.12,.3,.62,.17,.63,.24,.11,.38,.89,0,.7,.43,1,.57,.05,.01,0,.13,.22,.73,0,.03,0,.02,0,.06,0,.01,.39,.17,0,.82,.14,.55,.01,0,.01,.62,.5,.87,0,.85,.13,0,.95,.14,.48,.33,.42,.29,.01,.63,0,.12,.12,.04,.74,.11,.23,.02,.83,.04,0,.06,0,.02,.09,.2,.29,0,.04,.41,.51,0,.58,.02,.39,0,.98,.01,.01,0,.21,.89,.16,.43,.01,.04,.77,0,.16,.01,.15,.16,.22,.35,.4,.71,.08,0,.06,0,.84,0,.01,.14,.18,.15,0,0,.35,0,.25,.01,.65,.35,.98,.54,.6,.39,.68,.22,.29,0,0,.75,.8,0,0,.87,.01,.01,.89,.09,.2,.11,.45,.42,.01,.77,.4,.15,.56,.04,.8,.44,.78,.79,.05,.31,.05,.37,.01,.05,0,0,.86,0,.01,.02,.18,.6,.88,0,.06,0,.83,.11,.96,.9,.33,.02,.26,.95,.52,.04,.15,.16,.14,.07,.95,.53,.08,.31,.43,0,.47,.02,.05,.47,.3,.39,.95,.14,.72,.01,.82,0,.92,.04,.29,.05,.1,.07,.55,.02,.43,.2,.75,.03,.42,.21,.86,.04,.47,.03,0,.04,.02,.97,.46,.19,0,.26,.15,.2,0,0,.25,.11,.99,.6,.58,0,.59,.36,0,.02,.13,0,0,.07,.11,.81,.33,.52,.64,.55,0,.21,.36,0,.01,.01,.7,.49,.5,.42,.24,.13,.93,.01,.78,.7,.71,.11,.8,.11,.08,.12,.87,.18,.81,.16,0,.32,.09,.95,.52,.72,.09,.19,.94,.39,.79,0,.19,0,.74,.29,.05,.34,.08,.07,.08,0,.87,0,.97,.73,.44,.15,0,.7,0,.36,.07,0,.64,0,.06,.09,.06,.14,.18,0,.38,.2,0,.15,.17,.85,0,.2,0,.7,.11,.06,.56,.95,.87,.62,.3,.2,.62,.75,.4,.39,.02,.26,.83,.01,.51,.49,.95,.09,.95,.29,.69,.86,.53,.2,.38,.04,.68,.03,.83,0,.23,.01,.5,.25,.55,.06,0,.17,.25,.66,0,.02,0,.97,.43,.03,.86,0,.6,.05,.73,.27,.03,.63,.01,.82,.01,.73,.01,.51,.05,.03,.85,.33,.99,.25,.36,.09,.65,.93,.53,.58,.05,.19,.51,.27,0,.07,0,.77,.13,.1,.02,.21,.07,.49,0,.02,0,.02,.02,0,.04,.02,.6,.17,.94,.01,.05,0,.01,.45,.19,.08,.72,.19,0,.82,.53,.01,.5,.34,.01,.06,0,.66,.22,.8,.26,.12,.72,.06,.29,.29,.01,.21,.05,.01,.21,.52,.29,.39,0,.02,.01,.04,.67,.06,0,.17,0,.53,.53,.93,0,0,.01,0,0,0,.38,.46,0,.11,.64,.17,.09,.52,.04,.37,.09,0,.13,0,.98,0,.01,.84,.15,.92,0,0,.01,.03,.14,.01,.56,.86,.86,.55,0,0,.93,1,.01,0,0,.04,.01,.99,.1,.22,.28,.01,0,0,.38,0,.74,.02,0,.26,.91,.01,.36,.04,.34,0,0,0,.02,0,.56,.03,.65,.05,.04,.01,.71,.27,.97,.61,.19,.41,.01,.05,.16,.17,0,0,.11,.97,.28,.09,.01,.54,.18,.43,0,.09,.16,0,.01,.35,.02,.99,.1,.39];export{a as pvalData};
