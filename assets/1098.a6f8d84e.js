const a=[.09,.37,.28,.57,.73,.06,.01,.01,0,0,.24,.68,.17,.66,.11,.41,.21,.27,.07,.54,.69,.15,.65,.04,.14,0,.06,.52,0,.03,.01,.55,.58,.04,.47,.45,.13,.08,0,.41,.91,.02,.38,.9,.86,.08,.67,.4,.82,.02,.91,.58,.04,.47,0,.08,.06,.61,.01,.23,.08,.08,.06,.28,0,.03,.01,.12,.32,.32,.52,.11,0,.38,.22,.03,.11,.08,.12,.4,.73,.03,.53,0,.51,1,0,.29,.45,.93,0,.11,0,.72,.96,0,.05,0,0,0,.73,.04,0,.48,0,.19,.62,.33,.02,0,.05,.01,.1,.24,.03,.3,.44,.07,.04,.03,.64,.75,.03,.02,.75,0,.1,0,0,.55,0,.02,.81,.34,0,0,0,0,0,.02,0,.03,0,0,.07,.48,.96,0,0,.62,.07,.91,.84,.01,0,0,0,.09,.01,.11,.07,0,.63,0,.01,.06,.9,0,0,.02,.28,.02,.03,.01,0,.12,.16,.22,.03,.63,.61,.27,.65,.06,0,0,.01,0,.45,.36,.64,.06,.03,0,.02,.83,0,.93,.23,.79,.06,.01,.62,.56,.93,0,.69,0,0,0,.06,.61,.31,.89,.66,.64,.07,.02,.01,.4,0,0,0,.53,0,.68,.01,.01,0,.02,.97,.46,.05,.35,.93,.12,.4,0,.16,.48,.1,.36,0,0,.05,.78,.51,.39,.85,.23,.32,.02,0,0,.02,.17,.6,.11,.24,.05,.24,0,.06,.01,0,0,.27,0,.85,.6,.92,.04,.6,.1,.19,0,.22,.06,.66,.71,0,.13,.03,.46,0,.07,.05,.26,.03,.15,.03,0,.06,.74,.01,.69,.01,.05,.15,0,.16,.6,.57,.28,.81,0,0,0,0,0,.08,.66,.21,.05,0,0,.05,0,.1,.29,0,.1,.11,0,.1,0,.01,0,.1,0,.61,0,0,.86,.2,.13,.03,0,.06,.9,.02,.55,.2,.89,.3,.88,.92,0,.34,0,0,.19,.56,0,.05,.06,.01,.06,.55,.08,.31,.2,0,.07,.14,.61,.43,.56,.19,.88,.44,.28,.04,0,.55,0,.23,0,.14,0,.91,.14,.95,.28,.44,0,.01,.28,.02,.05,.79,.02,.37,.03,.02,.53,.04,.5,0,.85,.3,0,.74,0,.02,.45,.3,.64,0,0,.24,.59,0,.87,0,.15,0,.35,0,.05,.17,.35,.14,.78,.2,.97,.88,.96,0,.06,0,0,.03,.21,.01,.46,.02,.02,.84,.16,0,0,0,.09,.1,0,.53,0,1,0,.53,.01,.14,0,.77,0,.35,.61,0,.86,.84,.08,.39,0,.15,0,.91,.6,0,.95,.93,.23,.07,0,0,.11,.11,.15,.72,.41,0,.39,.08,.01,.04,0,.08,.39,.04,.24,.39,.81,.01,.64,.59,.54,.15,.26,.9,0,0,0,.03,.13,.06,.22,0,.01,.43,.31,.01,0,.01,0,.05,.35,.11,0,0,0,.37,.93,0,.23,0,.1,.78,.06,.36,.06,0,.1,.75,.03,.58,.25,0,.03,0,.42,.2,0,.03,.77,.14,.15,.15,.59,.91,0,.12,.65,.28,.02,.89,.22,.18,.01,.02,.29,.14,.2,0,.02,.42,.76,.33,.17,.7,.23,.95,.25,.01,.95,.03,.26,.62,.66,.04,.14,.04,.18,0,0,0,.58,.46,0,.1,.13,.59,.99,.23,.12,.01,.06,.47,.35,.06,.34,1,.53,.73,.23,.09,.05,0,.04,.04,0,.65,.11,0,.15,.08,.12,.75,.87,.07,.14,.06,.32,0,.71,0,.04,.7,0,0,.45,.24,0,.3,.01,.01,.09,.1,0,.39,.69,.08,.01,.14,.71,.73,0,0,0,0,0,.19,.01,0,.99,.13,.94,.04,.04,.19,.63,.52,.84,.6,0,.39,.59,.67,0,0,.07,0,.85,.22,.04,0,.01,0,.41,.82,.89,.48,0,.8,.16,0,.78,.11,0,.01,.03,.25,.49,0,.04,.08,.04,0,.57,.47,.26,0,.02,.01,.52,.2,.3,.19,.48,.11,.12,.1,.01,.39,.77,.26,.28,0,.1,.2,.9,.02,0,.09,.88,.06,.49,.57,.1,.02,.33,.13,.05,.04,.57,0,0,.19,.26,.36,.32,.26,.78,.82,.94,.91,.18,0,.08,0,.11,.01,0,.88,0,.85,.69,0,.27,.08,.31,.45,.01,.06,.51,.85,.05,.04,.03,.96,.32,0,0,.58,.04,0,.09,.04,.31,.46,0,.78,.05,.04,.01,.26,0,0,.2,0,.33,.39,0,0,.03,.02,0,.66,0,0,0,0,.65,.46,.2,.08,0,.74,.48,0,.88,.42,.57,.05,.16,0,0,.28,.98,.87,.69,.01,.21,.01,.11,.95,.67,.28,.22,.95,.24,0,.62,0,.03,.13,.54,.01,0,.39,.55,.01,.27,.04,0,.07,.71,.86,.08,.01,.03,.61,.07,0,.83,.95,0,0,0,0,.02,0,.72,0,.64,0,0,.32,.93,0,0,0,.58,.18,0,0,0,.01,.06,.78,.19,.1,.06,.28,.02,.23,.7,0,0,.06,.45,0,.07,.99,0,.02,.57,.02,.6,.5,.74,0,.98,.35,.73,.02,.26,.06,0,.05,0,.04,.81,.21,.88,.02,0,.7,0,0,.19,0,.75,.49,.13,.05,.81,.1,.25,.03,0,.12,.08,.35,.06,0,.96,.01,.53,.45,.1,0,0,0,.01,0,.27,.23,.95,.61,.49,0,.66,0,0,.01,.14,.06,0,.01,.01,.01,.66,.6,.32,0,.59,.65,.7,.91,.5,.44,0,.01,.65,0,.03,0,0,.01,.01,.61,.01,.32,.03,.68,0,.01,.12,.05,.02,.02,.04,0,.37,.2,0,.11,.61,.86,.07,.27,.05,.47,.41,.77,.03,.02,.18,.82,.41,.96,.08,0,.85,0,.85,.95,.37,0,.55,.01,.23,.99,0,.01,0,.55,.23,.02,.87,0,.48,.88,0,.02,.03,.9,.06,.54,.75,0,.33,.62,.12,.49,0,.75,.42,.04,.25,.06,.36,.05,.14,0,.18,.61,.01,0,.01,.31,.18,.01,.08,.66,0,.01,.02,.13,.33,0,.07,.01,.13,0,.04,.06,0,.08,.64,.17,.26,.06,.62,.06,.7,.61,.14,.34,0,.16,0,.31,.47,.04,0,.01,0,.03,.04,.04,.77,.17,.37,.89,.02,.07,.22,.06,.02,.05,.02,.01,.92,.4,.16,.1,.36,0,.18,.62,.12,0,0,.71,.97,.89,.67,0,.46,0,.04,.61,.94,.67,.75,.01,0,.25,0,.04,.32,.24,.23,0,.09,.17,.07,.73,.02,.19,0,.14,.03,.99,0,.05,0,.45,.04,.24,.93,.87,.01,0,.47,.61,.46,.06,.18,.02,0,.59,0,0,.27,.14,.68,.02,.66,0,.08,.98,.12,.51,.13,.84,.24,.1,.1,0,.17,.05,0,.34,.14,.59,.13,0,.74,.05,0,.02,.62,0,0,0,.14,.83,.01,.69,.08,.26,.3,.17,0,.16,0,.68,.06,.18,.14,0,.09,.15,.01,.17,.21,0,0,.02,.26,.27,.02,.7,.63,.03,.43,.31,.04,.23,.05,.45,.85,.11,.05,0,.18,.01,.76,0,.56,.32,0,.5,.74,0,.64,0,.01,.07,.97,.95,0,.49,.04,.03,.01,.02,.07,.55,.82,0,.49,.09,.16,.09,.24,.03,.46,0,.15,.24,0,.19,.05,.67,.9,.23,.22,.43,.01,.02,.02,0,0,0,.11,.38,.06,.01,0,.39,.01,.32,.04,.3,0,.62,.02,0,.85,.23,.01,0,.32,.32,0,.69,.06,0,0,.13,.07,0,0,.04,.02,.72,.46,.75,.34,.11,0,0,.38,0,.38,.56,.08,.38,.42,.94,.35,.83,.19,.11,0,.02,.52,.01,0,.01,0,0,0,0,0,0,0,0,0,.02,0,.05,0,.02,0,.94,.05,.81,.04,.01,.01,0,.17,.01,.11,.08,.29,.96,.04,0,.95,.41,0,.44,.67,0,0,.02,0,0,0,.41,.49,0,.02,.28,.2,0,.41,0,.36,0,.05,.01,0,0,.25,.08,.48,.7,0,.49,.13,.34,.51,.14,.99,0,.98,.31,.2,0,.49,.35,.64,.11,.22,.02,.66,.02,0,.16,0,.33,.23,.02,.1,0,.03,0,.01,.31,0,.3,.01,.36,.06,.22,.25,.93,.04,.3,0,0,.09,.59,.43,.8,0,.44,.01,0,0,.17,.69,.51,.01,0,.94,.05,.21,.03,.01,0,0,0,.67,0,.07,.37,0,0,0,0,.77,.78,0,0,.32,.01,.18,.08,0,.31,.17,.94,.21,.41,.33,.55,0,.07,.01,.61,0,0,.95,.19,.66,.08,.02,.09,.92,.08,.55,.13,.28,0,0,0,.41,.13,.03,.04,.09,.8,.1,0,0,0,0,.12,.03,0,.01,0,.73,.07,0,.32,.01,.1,0,0,.13,.02,0,0,0,0,.72,.02,0,0,.01,0,.02,.54,.1,.89,.18,0,.2,.03,.15,.14,.29,.15,.25,0,0,.1,.27,.01,.03,0,.14,.11,.89,.39,.01,.14,.27,.04,.01,.98,.9,.08,0,.44,.01,.98,0,.7,.45,.34,.74,.84,0,0,0,.78,.25,.16,0,.21,.01,0,.55,.25,.88,.03,.29,0,0,0,0,.02,0,.33,0,.08,.06,.73,.04,.88,0,.19,.12,0,.01,.01,.88,.88,.45,0,0,0,0,0,.2,.11,.13,0,.14,.55,0,.61,.01,0,.25,0,.4,.28,.11,0,0,.5,.3,.72,.1,.15,.73,.06,0,.01,0,.15,0,.73,.02,0,.94,.06,.4,.27,0,.45,.03,.55,.69,.04,.69,.35,.33,.01,.01,.94,.77,0,.09,.65,.04,.8,.16,.03,0,.04,.44,.29,0,.31,.27,.43,0,0,.42,.18,.53,.27,.24,.89,.49,.16,0,.42,.85,.33,.16,0,.64,.01,.2,.98,.98,.77,.24,.18,0,0,.14,.2,.94,0,0,.34,.01,.1,0,.61,.78,.97,.28,.49,1,.21,.28,.7,.06,.19,0,0,.58,.89,0,.31,.37,.09,.45,.75,.83,.24,.31,.68,.96,0,.01,.3,.78,.26,.59,.09,.01,0,.04,.56,.27,.65,.4,.73,0,0,.02,0,0,0,.7,.09,.36,0,.05,0,.02,.37,.07,.02,.71,0,.03,.92,0,.04,0,0,.26,0,.43,.01,.35,.29,.36,.12,.84,0,.82,.5,.94,0,.81,.04,0,.32,0,0,0,.21,0,.7,.4,.96,.5,.52,.04,.1,.18,.17,.48,.35,.02,.18,.61,.47,.02,.03,.35,.99,.03,.19,.78,0,0,0,.03,.02,.17,.05,.02,.28,.01,.01,.01,0,0,.15,.51,.65,0,0,.36,.56,.01,0,0,.53,.31,0,.18,.14,.56,.13,.17,0,0,.13,.02,.44,.41,0,0,0,.11,.28,.5,0,.26,.65,.01,.03,.08,0,.11,.98,.21,.01,0,0,.02,0,.79,.6,0,.44,.84,.22,.32,.6,.65,0,0,.8,0,.02,.09,.7,.05,0,.82,0,.24,.92,.89,.57,.79,.14,.12,0,.92,.16,.81,.34,0,.03,.21,.92,0,0,.01,.83,0,.01,0,.28,.46,.69,.03,.9,0,0,.33,.03,.19,.19,.22,0,.18,.02,.14,.41,.2,.47,0,.49,.08,.34,.02,.03,0,.63,.42,.82,0,.22,.13,.66,0,.02,.02,0,.44,.78,.97,0,.13,0,.01,0,0,.04,.06,.87,.04,0,.48,.01,.57,0,.01,.15,0,.71,.45,.04,.01,.01,.43,.02,0,.07,.97,.05,.16,.99,.32,0,0,.26,0,.98,.74,.21,.45,.07,.7,0,0,.42,.07,.06,.06,.73,.02,.77,0,.41,.6,0,0,.02,.98,.29,.86,.01,0,0,0,.52,.57,.12,0];export{a as pvalData};
