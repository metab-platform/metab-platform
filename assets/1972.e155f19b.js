const a=[.61,.1,.92,.64,.75,.29,.26,0,.39,.02,.55,.1,.93,.57,.13,.64,.39,.7,.68,.53,.39,.59,.51,0,.88,.32,.01,.45,.01,0,.54,.3,.57,.39,.44,.68,.19,.06,.2,.06,.34,.33,.65,1,.32,.18,.07,.68,.02,.07,.52,.92,.39,.03,0,.13,.6,.73,.66,.23,.01,.44,.39,.3,.16,.61,.98,.03,.97,.52,.44,.22,0,.68,.18,.92,.01,0,.96,.52,.28,.06,.72,.11,.12,.22,.31,.17,.36,.36,0,.93,.08,.36,.03,.01,.79,.21,.08,.01,.4,.69,.09,.6,.27,.21,0,0,.4,.34,.18,0,.6,.59,0,.15,.77,.8,.63,.92,.19,.85,.06,.59,.77,.16,.92,.01,.74,.29,0,0,.38,.01,.25,.41,0,.7,.34,.28,.59,.07,1,.46,.18,.25,.52,.06,.33,.03,.57,0,.83,.79,0,0,.11,.87,.65,.03,0,.04,.95,0,.01,0,.95,.53,.01,.08,.32,.98,0,0,.56,.22,.49,0,0,.28,.07,.84,.13,.06,.06,.21,.92,.92,0,.52,.51,0,.23,.36,.15,.45,.24,.01,.59,.63,.19,.23,.39,.74,.65,.02,.97,0,.03,.41,0,.03,.04,.36,.74,.37,.64,0,.22,0,.72,.29,.09,.18,.22,.3,0,.84,0,.05,.57,.13,.02,.68,.35,.29,.03,.2,.07,.52,0,.01,.01,0,.03,0,.49,.43,.72,.67,0,.38,0,0,.36,.19,.8,.06,.35,.34,.02,0,.02,.38,.02,.21,.24,.8,.21,.03,.86,.07,.81,.76,.81,.56,.01,.01,.9,.02,0,0,.3,.54,.01,.42,.01,.22,.01,.97,0,.01,.48,0,.1,.88,.63,.89,.92,.45,.59,.96,.86,.58,.64,.85,.11,.28,0,.2,.52,.72,.51,.06,0,.4,.42,0,.79,.37,.17,.16,.11,.46,.02,.02,.41,.17,.02,.04,.84,.4,.97,.03,.03,.01,.74,.37,0,.52,.08,.7,.71,.7,.07,.75,.86,0,.94,.11,.49,.08,.75,.01,.55,.18,.05,.04,.68,.56,.07,.92,.02,0,.26,.24,.84,.4,0,0,.08,.23,.02,.19,0,.1,.58,.46,.98,0,.8,.71,.27,.25,.29,.48,.84,.37,.54,.79,.54,.56,.42,.05,.07,.7,.57,.38,.04,.37,.23,.05,.66,.03,0,.5,.04,.41,.81,.48,.82,.48,0,.46,0,.11,.48,.48,0,.56,.76,.57,.63,.61,.72,.14,.66,.46,.07,.01,0,.07,.91,.37,0,.01,.04,.71,.31,.02,.08,.39,.72,.02,.69,.01,.45,.47,.23,.43,.02,.07,.58,.08,.7,.01,.02,.23,.01,.01,.41,.97,.67,0,.57,0,.14,0,.54,.06,0,.14,.89,.37,0,.77,.95,.06,.55,0,.62,.09,.09,.05,.29,.33,0,0,.72,.81,.6,.13,.25,.05,.51,.26,0,.43,0,0,.01,.18,.1,.01,.21,.72,.33,.33,.2,0,.14,.01,.39,.95,.47,.83,0,.12,0,.24,.88,.6,0,.25,.49,.29,.26,.35,.83,.88,0,.01,.33,.1,.28,.68,0,.7,0,.28,.1,0,.67,0,.46,.39,.6,0,.51,.04,0,.26,.31,.27,.99,.76,.4,.15,.14,.68,.79,.35,.5,0,.38,.19,.45,.66,0,.04,.8,.37,.58,.01,.28,.2,.58,.07,0,.1,.74,.22,.51,.45,.02,.05,.72,.56,.75,.15,.88,.87,.11,.57,0,.43,.42,.23,.1,.02,0,.17,.42,.01,.38,.03,0,.61,.65,.02,.29,.04,.44,0,.49,.88,.94,0,.16,.87,.36,.06,.12,.42,0,.17,.52,0,.13,.01,.44,.12,.38,0,.02,.11,.81,.01,.07,.09,.39,.29,.98,.37,.27,.24,0,.02,.84,.02,.19,.42,.05,.54,.71,.04,.19,.47,.53,.94,.89,.88,.67,0,.26,.08,.67,.13,.42,.13,0,.52,.1,0,.04,0,.65,.17,.47,.43,.07,.01,.04,.01,0,.9,.01,.21,.5,0,.07,.33,0,.94,.52,.57,.31,.01,.82,.81,.25,0,.3,.62,.08,.3,.68,.32,.74,0,.59,0,.01,0,.06,.11,.13,.01,.48,.9,0,.12,.22,.26,.04,.54,.11,.31,.26,.56,.31,0,.72,.52,.48,0,.14,.21,.57,.64,.09,.3,.54,0,.87,.95,.01,.08,.01,0,.29,.85,.33,.07,.64,.11,.2,.1,.71,.34,.33,.31,.7,0,.4,.09,.93,.79,.55,.22,0,.01,.8,.44,0,.98,.01,.01,.77,.01,.4,.04,.14,.89,.88,.03,.08,0,0,.73,.57,.03,.05,0,.24,.46,.48,.58,.36,.1,.46,.03,.85,.67,.91,.62,.02,.2,0,.63,.66,.58,.83,.44,.27,.01,.3,.01,0,.4,.06,.05,0,.91,.05,.14,.56,.04,.01,.35,0,.45,.39,.29,.34,.27,.18,0,.81,.21,.37,.06,.56,.02,.16,.71,0,.57,.32,.56,.11,.19,.04,.04,.97,.54,0,0,.01,.58,.39,.07,.28,.71,0,0,.08,.67,.86,0,.19,.12,.64,0,0,0,0,.12,.98,.65,.02,.67,.05,.36,.44,.58,.01,.43,.11,.01,.19,.4,.46,0,.49,.16,.24,.61,.6,.94,.18,.94,.1,.9,.2,.54,.01,0,.49,.02,.34,0,.94,0,.88,0,.38,0,.01,.08,0,.17,.77,.7,.11,.68,.76,.08,.07,0,0,.45,.44,.46,.81,.71,0,.46,.95,.74,.76,.09,0,.89,.01,.63,.02,.18,.97,.03,.01,.39,.18,.09,.04,.3,.83,.66,.52,.01,.27,.38,.01,.33,.1,.77,.7,0,.3,.01,.05,.01,.02,.69,.16,.01,.02,0,0,.1,.18,0,.5,.02,0,.01,.01,.84,.95,.01,.21,0,0,0,.59,0,.65,.91,.41,.79,.95,.95,.06,.82,.07,.05,.24,.22,.21,.53,.81,.02,.12,0,.14,.06,.03,.46,0,.4,.42,.94,.14,0,.02,.11,.85,.02,.17,.48,.01,.57,.33,.02,.6,.06,.45,0,.56,.16,0,.23,0,.14,.58,0,.2,.6,.89,.86,.26,.86,.06,0,.64,.12,.13,.92,.01,.27,0,.85,.13,.28,0,.8,.52,.14,.59,.06,.01,.11,.02,.36,.07,.61,.14,0,.09,.05,.4,.89,.35,.9,.01,.03,.19,.44,.75,.4,0,.09,.38,.57,.65,.79,0,.2,.9,.58,0,.07,.08,.24,.96,.25,.47,.15,.82,.02,.57,0,0,.36,.9,.07,.48,.22,.04,.39,.83,0,.31,.42,.33,.68,.33,.06,0,.11,.06,.56,.05,.95,.71,.85,.38,0,.26,0,.25,.3,.05,0,.33,.1,.47,.18,.79,.71,.58,.01,.23,.81,.07,.02,.06,.05,.56,.31,.29,0,.89,.06,.36,.04,.4,0,.86,.34,0,.17,.45,.02,.18,.01,.09,.14,.09,.37,0,.9,.82,.04,.1,.99,.04,.18,.21,.24,0,0,0,.12,.86,.88,.36,.9,.05,.05,.66,.31,.27,.69,.07,.18,.06,.93,.67,0,.93,0,.77,.02,.99,.03,.01,.12,.31,.11,.35,.79,.23,.09,.18,0,.06,0,.02,0,.09,0,.52,.25,.83,.44,.93,.87,.57,.16,.21,.31,.29,.76,.07,.06,.61,.59,.59,.84,.51,.88,.94,0,.34,.31,.07,.5,.01,.67,.56,.85,.34,0,.05,.01,.02,.57,0,.62,.03,.61,.61,0,.98,0,.01,.92,.02,1,.45,.15,.12,.01,.98,.25,.95,.5,.35,.76,0,.09,.76,.1,0,0,.07,.17,.36,.03,.24,.12,.17,.3,.1,.07,0,0,.33,.82,.05,.47,.41,.13,.07,.55,0,.06,.25,.27,.31,.03,.66,.04,0,0,.59,.26,.53,0,.42,.69,0,.51,.02,.55,0,.27,.57,.87,.01,.36,.02,.03,.02,.14,.56,.04,.13,.99,.01,0,.06,.95,.05,.14,.07,.02,.02,.01,.02,.23,.35,0,.28,.01,.9,0,.1,0,.74,0,0,.7,.26,0,0,0,.34,0,.76,0,0,.06,0,0,.39,.93,.08,.66,.13,.14,.36,.02,.3,.62,0,0,.96,.63,0,.82,0,.15,.76,.05,.01,.01,.29,.34,.42,.45,.86,.01,.79,.1,1,.43,.2,.2,.25,.18,.99,.03,.87,.84,.67,.48,.78,.23,.69,.01,.8,.01,.36,.33,.18,.83,0,.07,.01,.01,0,.69,.43,.02,.95,.06,.12,.32,.56,.16,.91,.92,.09,.48,.56,.04,.61,.95,.39,.03,.36,.23,.01,.57,.93,.14,.22,.2,0,.12,0,.67,.16,.14,.21,.19,0,.05,0,.59,.19,.58,0,.56,.01,.02,.11,.21,0,.02,.01,.41,.09,.52,.4,.94,.38,.04,.42,.05,.31,.11,.06,.04,.03,.22,0,.3,.7,.04,.62,0,.28,.1,.48,.9,.53,.07,.01,.02,.25,.87,.01,.44,.74,.08,.03,.51,.03,.42,.03,.29,.26,.71,.02,.87,0,.92,.89,.01,.81,.09,.48,.55,0,.74,.73,.54,.93,.7,.64,.66,.19,.01,.9,0,.78,.67,.5,.1,.93,.88,.5,0,.34,.37,.05,.19,.33,.78,.57,.83,.16,.94,0,.52,.05,.07,0,.62,.42,.9,.22,0,.01,.02,.94,.84,.32,.21,.02,0,.38,.04,.27,.01,.63,.35,.75,.21,.75,.05,.06,.21,.77,.13,.79,.05,.02,.58,.41,.04,.94,.92,.01,.72,.01,.61,.87,.8,.47,.02,.06,.01,.97,.27,.23,.6,.92,.37,.58,.99,.01,.66,.01,.61,.4,.78,.36,.23,.01,.03,0,0,.21,.21,.71,.18,.37,.94,.48,.19,.01,.44,.09,0,.61,0,.15,.7,.79,.41,.89,0,.61,.01,.13,.01,.39,.54,.06,.02,.62,.7,.09,.78,.57,.62,.11,.43,.06,0,.02,.13,.83,.02,.2,0,.04,.83,.03,.19,.53,.58,.51,.08,0,.84,.04,.09,.98,.07,.45,.93,.74,.78,.17,.9,.63,.81,.14,.52,.05,.45,1,.78,.27,.2,.28,.04,.18,.22,.17,.77,.01,.2,.65,.58,.38,.6,.01,.9,.06,.03,0,.03,.03,.4,.42,.23,.23,.09,.49,.55,.26,.57,.49,.44,.16,.22,.08,.81,.02,.46,.18,.61,.1,.49,.05,.29,.32,.55,.04,.26,.42,.26,.09,.46,.23,.27,.23,.52,.63,0,0,.02,.38,.94,.44,.29,.02,.12,.25,.1,.38,0,.81,.06,.52,.61,.85,.05,.01,.21,.75,.26,.26,.76,0,.14,0,.13,.21,.23,.01,.31,.95,.67,.72,.52,.2,.05,.15,.59,.07,.26,.34,.16,0,.92,.02,.71,.46,.23,.56,0,.83,.03,.83,.79,.22,.85,.83,.12,.64,.59,.01,0,0,.77,.27,.2,0,0,0,.03,.29,.22,.07,.36,0,.95,0,.17,.25,0,0,0,.4,.45,.49,0,.07,.02,.29,0,.22,.93,.11,.53,.3,0,0,0,.92,.63,.09,.99,.26,.3,.38,.1,.49,.67,.54,.18,.1,.04,.64,0,.62,.34,.18,.99,.18,.88,.89,.6,.44,.1,.02,.19,.78,.19,.07,0,.11,0,.07,.53,.11,.37,.69,.69,.94,.43,.2,.84,.56,0,.82,.46,.32,.71,.24,.65,.03,.48,0,.4,0,.78,.85,.02,.1,.94,.01,.02,.22,.38,.42,.86,.25,.14,.09,.66,.27,.14,.08,.33,.33,0,.71,.87,.01,.15,.1,.28,.01,.27,.65,.4,.21,0,.05,.36,.01,.04,.37,0,.26,.38,.92,.01,.26,.02,.27,.01,.18,.43,.01,.86,.77,.01,.19,.51,.41,.87,.02,.01,.55,.78,0,.38,.81,.69,.39,.51,.38,.18,.13,.17,.46,.01,.48,.26,.01,.71,.53,.34,.01,.19,.19,.02,.97,.2,0,.05,.01,.28,.21,.36,.23,.27,0,.18,.2,.03,.01,.33,.52,.27,0,.89,.14,.47,.22,.7,.79,.54,.23,.01,.81,.53,.7,.31,.5,.81,.02,.71,.5,.96,.5,.1,.78,.04,.33,.86,.84,.01];export{a as pvalData};
