const a=[0,.3,.35,.09,.9,0,.76,0,.92,.11,.59,0,0,.04,.41,.04,0,.91,0,.01,.42,.4,.99,.8,.24,.51,1,.28,.96,.75,.09,.19,.19,0,0,.03,.07,.85,.15,.51,.71,.51,.03,.07,0,.72,.64,0,.38,.23,.85,0,.65,.43,.01,.75,.34,0,.65,.78,0,.18,.44,.53,.71,.96,.14,.93,.43,.38,.99,.56,.13,.05,.65,.05,.01,.01,.58,.05,.58,.49,.61,.42,.51,.06,.54,.28,.56,.73,.04,.04,.43,.55,.01,.01,.85,0,.25,.01,.56,.15,.03,.98,.23,.01,.17,0,.03,.51,.02,.83,.56,.1,.03,.46,.21,.26,0,.24,0,.08,0,.53,.69,1,.52,0,.81,.68,.15,.36,.9,.7,0,0,.09,0,.58,0,.21,0,.84,.34,0,.04,.34,0,.08,.98,.15,.5,.51,0,.16,0,.11,0,.25,.57,.52,.09,0,.36,.28,.23,.05,.38,0,.49,0,.32,.33,.49,.6,.43,.56,.4,.08,.24,.81,.02,.35,.32,.6,0,0,0,.39,.04,.62,.01,0,.01,.11,.06,.22,0,0,.51,.58,.25,.64,0,.38,.01,.06,.2,.05,0,.48,.3,.02,.47,0,.23,.1,.65,.47,.11,.29,.82,.14,.13,.6,.73,.11,.23,0,.91,.9,.65,.97,.93,0,0,.97,.66,.23,.81,.25,.72,.55,.15,.46,.64,.8,.19,.01,.52,.11,0,.11,.94,.18,0,.04,.05,.7,.72,.66,.8,.15,.28,0,.27,.81,.33,.93,.01,0,0,.23,.95,.72,0,.9,0,.4,.43,.31,.04,.93,.01,.46,.57,.05,.1,.03,.25,.37,.11,.24,.95,.29,.06,.82,0,.01,.9,.1,.75,.91,.1,.01,.3,.17,.04,.02,.41,.76,.61,0,0,0,.89,.91,.85,.86,.08,.82,.1,.44,.39,.33,.54,.05,.33,.39,.63,.52,.59,.3,0,.92,.06,.96,.02,.99,.16,.14,.51,.3,.46,.59,.42,.14,.06,.95,.88,.09,.02,0,.6,.2,.82,.33,.96,.47,.86,.11,.47,.88,0,.56,.83,0,.73,.02,.2,.3,.12,.48,0,0,.15,.03,.64,.46,0,.08,.66,.57,.77,.03,.17,.76,.87,.22,.18,.41,0,.83,.05,.01,.8,.22,.22,.64,.18,.52,.12,.56,.41,.73,.2,.54,.39,.46,.1,.5,.11,.49,.53,0,0,.45,.36,.22,0,0,.14,0,0,.74,.39,.5,0,.66,.76,.27,0,.08,0,.44,.66,.1,.21,.55,0,.08,.79,.86,0,.08,.01,.58,.95,.09,.01,.58,.2,.77,.71,.99,.05,.88,.22,0,.82,.89,.09,.07,.01,.81,.02,.1,.03,.07,.27,.01,.38,0,0,.15,.07,.27,.54,.02,.21,.1,.59,.06,.28,.26,.32,.39,.81,.51,.91,.59,0,.24,.38,.04,.54,.31,.04,.1,.15,.32,.73,.32,.32,.66,.56,0,0,.59,.07,.15,.17,.74,.94,.4,.56,0,.23,.01,.42,.5,.29,.88,.81,.02,0,.04,.01,.95,.03,.36,.41,.03,.52,0,0,.13,.75,.14,.03,.72,.86,0,.53,.03,.7,0,.58,.98,.44,.04,.63,.57,.26,.36,0,.31,.54,.03,.99,.86,.68,.79,.25,.23,.04,.36,.06,0,0,.95,.69,.81,1,.53,.77,.2,.6,.48,.38,0,0,.42,.01,.22,.55,.6,.14,.04,.16,.08,.92,.14,.35,.91,0,.98,.65,0,.4,.12,.52,.61,0,.93,.39,.37,0,0,.4,.83,.02,0,0,0,.24,.75,.39,.14,0,.67,.1,.02,.6,.42,0,.15,.13,.15,.67,0,.06,.04,.18,.49,.14,.04,.41,.05,.26,0,.31,.05,.01,.99,.1,.15,.62,.01,.36,0,.1,.92,.29,.05,.06,.89,.21,0,.82,.5,.53,.19,0,.88,0,.93,.37,.1,.38,.91,0,.89,.61,.01,.85,.34,.94,.43,.04,.45,.11,.41,.07,0,0,.1,.83,.12,0,.46,.56,.06,0,0,.58,0,0,.93,.02,.48,.67,.13,.02,.01,.02,0,0,0,.73,.22,.72,.02,.12,.01,.79,.45,.09,.05,.89,.1,.11,.03,0,.46,.16,.17,.74,0,.95,.01,.32,.15,.14,.23,.52,.42,.32,.35,.02,.07,.07,.04,.44,.06,0,.82,.31,.81,.08,0,.12,.29,0,.24,.11,.75,.19,0,.89,1,.54,.14,.68,.52,.82,.39,0,.13,0,.18,0,.41,0,.16,0,.64,.12,.35,.35,.76,.8,0,.38,.66,.1,.77,.01,.01,.42,.63,.52,.07,.94,.52,.76,.57,.74,.59,.23,.02,.11,0,.19,0,.94,.11,.06,.02,.62,.09,.49,.23,.07,.63,.98,0,.48,.61,.41,0,0,.77,0,0,.63,.03,0,.82,.29,.53,.77,0,.51,.01,.59,.48,.26,0,.74,0,.22,0,.96,.04,.38,.03,.03,.63,.15,.17,.06,.06,.12,.84,.95,0,.66,.05,0,.02,.43,.91,.02,.03,.88,.47,0,.56,.7,.3,0,.02,.11,.05,.09,.43,.46,.69,0,.56,.07,.62,.69,.17,.56,.01,.76,.09,.59,.94,0,0,0,.07,0,.11,0,.69,.67,0,.74,.07,.12,0,.19,0,.6,0,.59,0,.49,.05,0,.57,.02,0,.28,.9,.19,.01,0,.03,.47,.22,.91,0,.71,.48,.29,.01,.54,.85,.62,.71,.19,.13,.24,0,.44,0,.03,.14,.44,.14,.82,.51,.01,.54,.45,.75,.89,.88,.17,.49,.51,.37,.68,.93,.01,.1,.91,.86,.89,.35,.62,.93,.01,.03,.94,0,0,.63,.65,.55,.33,1,.37,.5,.02,.79,.33,.47,.74,.19,.14,.65,0,0,0,.4,.89,.33,.6,.09,.05,.16,.02,.33,.1,.32,.44,.28,.11,0,.32,0,.03,0,0,1,0,.06,.04,0,.34,.09,.03,.04,.01,.92,.04,.36,.44,.23,.05,.06,.22,0,.01,.44,.02,.05,.57,.31,.04,.7,.78,.46,.86,.26,.58,0,.01,.01,.13,0,.39,.04,.23,.13,.06,.94,.54,0,0,.15,.14,.05,.38,.04,0,.02,.73,.82,0,.35,.47,.81,.6,.09,0,0,.63,.03,.84,.86,.16,0,.65,0,.54,.71,.46,0,.41,.8,0,.95,.38,.01,.31,.54,.52,.68,.46,.86,.93,.12,.35,0,.25,.06,.41,.68,0,.29,.97,.04,0,0,.19,.59,.14,.62,0,.09,.44,0,.77,.08,.86,0,0,.25,0,.22,.59,.02,.78,.91,.07,.83,0,0,.84,.12,.74,0,.02,.61,0,.02,.23,.1,0,.71,.85,.19,.06,.03,0,0,.66,.05,.33,0,.03,0,0,.16,.86,0,.78,.82,.06,.47,.5,.35,.08,.47,0,.03,.84,.29,.25,1,.04,.95,.24,.74,.25,0,.39,.22,0,.94,.84,.19,.74,.37,.18,.21,.79,.25,0,.9,.27,.11,.81,.01,0,0,.29,.41,.12,0,.21,.8,.21,.22,0,0,.74,.36,.23,0,.67,.35,.01,.03,.65,.01,0,0,0,0,.09,0,.01,.12,.46,.51,.56,.85,.17,.14,.03,0,0,.52,.48,.5,.04,0,.95,0,.97,.39,0,.32,.69,0,0,0,.03,.35,0,.04,.16,0,.44,.07,.17,0,0,.26,.58,.25,0,.98,.55,.03,.48,.68,.93,.83,0,.16,.86,.29,0,.08,.35,.35,0,.71,.54,.07,0,.05,.03,.64,0,.71,.7,.24,.17,.96,.55,.32,.02,.16,.09,.17,.48,0,.55,.69,.6,.69,.48,.12,.59,.14,.87,.17,.1,.58,0,.55,.53,0,.02,.16,0,.93,.77,.3,.23,.14,.07,.98,.3,.28,.03,.07,.02,.99,.01,.29,0,.51,.47,.15,.05,.03,.02,0,.83,0,.19,.02,.4,0,.04,.83,.11,.11,.16,0,.01,0,.07,.37,.03,.01,.2,0,.33,.25,.02,.5,.82,.01,.41,.16,.71,.17,.97,.86,.25,.23,.37,.5,.51,0,.9,.02,.14,0,.02,0,.11,.32,0,.1,0,.87,.28,.71,.2,.69,.35,.25,.73,0,.44,0,0,.13,.31,0,.67,.29,.51,1,.88,.01,.46,.1,0,0,.13,.94,.06,.8,.24,.2,.52,.01,.31,.64,.29,.98,.25,0,0,.01,0,.48,.27,.92,.64,0,.09,.74,.73,.68,.01,0,.87,.76,.25,.84,.23,.13,.18,.03,.01,.3,.93,0,.02,.02,.14,.1,.74,.65,.01,.02,.02,.78,.25,.08,0,.1,.02,.04,.02,.63,.25,0,.91,.39,.79,.36,.15,.53,0,.39,.07,.05,.2,.68,.63,.15,.02,.64,.02,.71,.34,.61,.04,.04,.14,.44,.96,.02,0,.34,.04,.47,.38,.07,0,.87,.19,.58,.68,.44,.15,.67,0,.02,.58,.64,0,.1,.31,.01,.09,.98,.72,.14,.85,.17,.06,.18,.37,.18,.05,.98,.16,.13,.47,.19,.04,.2,.36,.86,.98,.27,.98,0,.34,.64,.37,.33,.52,.99,.59,.25,.95,.15,.25,.68,.37,.63,.91,.19,.75,.28,.31,0,.29,.87,.75,.34,.81,.73,.55,.35,.39,.78,.45,.21,.07,.49,.96,.71,.01,.84,.94,.74,.95,.17,.48,.05,.14,.46,.11,.17,.11,.49,.2,.25,.28,.17,.19,.71,.78,.02,.09,.68,0,.14,.54,.32,.23,0,.14,.06,0,.36,.47,.06,.04,.91,.79,.49,.7,.01,.02,.64,.03,.33,.43,.08,.61,.06,.6,.04,0,.15,.61,.02,.25,.54,.27,.76,.72,0,.54,.02,0,.87,.01,.22,.55,.04,.44,.44,.11,.22,.9,.95,.24,.35,.08,.26,.08,.57,.73,.46,0,.15,0,.18,.06,.16,.48,.05,.13,.02,.78,.22,.75,.08,.94,0,.39,.01,.81,.94,.23,.18,.28,.16,.51,.49,.28,.21,.33,.49,.43,.43,.07,.28,.52,.42,.59,.25,.11,.17,.48,.22,.77,.37,.53,.88,.47,.42,.51,.14,.06,.11,0,.01,.94,.99,0,0,.26,.52,.03,.22,.88,.8,.64,0,.21,.15,0,.37,.93,.55,.64,.02,.4,.25,.8,0,.11,.24,.83,.97,.27,.51,.03,.88,.06,.01,.56,.02,.61,.91,0,.08,.24,0,.87,.63,.31,.71,.4,.07,.65,.27,.49,.67,.75,.25,.15,.03,.31,.07,.15,.33,0,.15,.08,.57,.03,.14,.43,.21,.8,.88,.13,.01,.86,.01,.24,.47,0,.02,0,.05,.07,.38,.66,.82,.77,.12,.24,.25,.22,.87,.03,.06,.17,0,.01,.17,.02,0,.36,.09,.02,.91,.02,.05,.07,.66,0,0,.07,.27,.07,.01,.26,0,.24,0,.62,.03,.75,.44,.01,.75,.84,.18,.32,.48,.88,.67,.02,.79,0,.69,.03,0,.69,.13,0,.27,.81,.91,.1,.52,.69,.34,.93,.02,.2,.69,.79,.07,.05,0,.01,0,.06,.05,.06,.07,0,.59,.53,.25,.26,.36,0,.33,0,.53,.72,0,0,.53,.08,.01,0,.2,.79,.36,.83,.24,.01,.04,.03,.31,.25,.95,.42,.01,.86,0,.94,.17,.04,0,.16,.48,0,.99,.09,0,.71,.02,.83,.03,.5,.2,.7,0,0,.15,.23,.13,.41,.45,.02,.29,1,.41,.53,.27,0,.58,.66,.65,.56,0,0,.89,0,.84,.06,.8,.71,.1,0,.19,.62,.76,0,.12,.03,0,.67,.05,.12,.51,.07,.15,.28,0,.26,.47,.16,.51,.19,.92,.98,.47,.03,.19,.49,.32,.61,0,.28,.38,.49,0,.01,.07,.01,.78,.09,.53,0,.29,0,.16,.35,.72,.7,.42,.21,.22,.28,.63,.2,0,.39,.03,.23,.75,.45,.73,.78,.85,.36,.34,.08,.52,.4,.3,.76,0,.54,.45,.19,.05,.01,.63,.14,.67,.19,.07,.21,.32,.39,.01,.01,.77,.84,.46,0,0,0,0,.1,.46,.85,.4,0,.14,.01];export{a as pvalData};
