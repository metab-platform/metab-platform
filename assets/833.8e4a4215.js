const a=[0,.64,.87,.01,.73,0,.28,0,.94,.13,0,.9,.01,.09,0,.33,.15,.85,.08,.23,.57,0,.25,0,.26,.54,0,.04,.44,0,.04,0,.39,0,.73,.18,.21,0,.42,.59,.47,.7,.68,.3,.8,0,.14,.26,0,.01,.94,0,.1,.32,0,0,.03,0,.05,.64,0,.73,.02,.9,.02,0,.23,0,.69,.77,.44,.01,0,.03,.77,.86,.73,0,.76,.01,.68,.36,.63,.17,.74,0,.84,.02,.29,.35,0,.06,.01,.09,.3,.48,.54,.21,.57,0,.79,.03,0,.98,0,.08,.5,.26,.91,0,.28,.01,.53,.3,.27,.48,.76,0,.66,.83,.39,0,.56,.61,.48,.01,.45,0,0,.05,0,.58,.25,0,.46,.01,0,.02,0,.05,.1,0,.02,.81,0,.28,.9,0,.01,.89,.04,.1,.92,.27,0,0,.35,.03,.61,0,0,0,.08,.02,.02,0,.97,0,0,.54,0,0,0,.17,.61,0,.14,0,0,.65,.6,.93,.53,.02,0,.98,.4,.05,.02,.9,.56,0,.01,0,.01,.52,0,.02,.06,0,.15,.16,.13,.03,.68,0,.22,0,0,.08,0,0,.52,.04,0,.03,.09,.03,0,0,0,0,0,.57,.11,.11,0,0,0,.08,1,.05,.05,.8,0,0,0,0,.12,.66,0,0,.01,0,.08,.29,.35,.02,1,.99,0,0,0,.97,.21,.01,.94,.25,.01,.2,.97,0,.06,.19,0,0,.01,.14,.13,.67,.14,.02,.26,.79,.52,.81,0,0,.67,0,0,0,.17,.58,0,.99,0,.07,0,.01,.22,0,.99,.94,0,.62,0,.95,.02,0,.66,.15,0,.46,.83,.28,.64,0,0,0,.61,.62,.22,0,.02,0,0,0,.86,.65,.08,.57,0,.13,.01,0,.67,.37,.33,0,.16,.07,.84,.12,.02,.5,0,0,.01,.01,0,.73,.37,.45,.09,.89,.79,0,.42,0,0,0,.01,0,.09,.24,.05,.07,.16,.39,.57,.93,0,.09,.72,.17,0,.12,0,.86,0,.14,.83,0,0,0,.02,.19,.05,0,.48,.36,.8,.61,.19,.6,.1,.36,.87,.71,.63,.01,.41,.13,.01,.16,0,.93,.1,.04,.14,0,.47,.14,.01,.69,.02,.22,0,0,1,.46,.02,.53,0,.01,.09,.26,0,.02,.03,.05,.02,.01,.98,.17,.11,.16,0,.12,.06,0,.87,.61,0,.74,.03,.64,.59,0,0,.38,.1,.88,.22,0,.08,.88,.87,.32,1,0,.77,.01,.87,.02,0,.45,0,.35,.32,.5,.29,0,.97,.09,.46,.02,.34,.43,.15,.12,.08,.51,0,.61,.61,.62,.79,0,0,.03,.16,.04,.11,0,.01,.03,.16,.72,.32,.93,.96,.27,.28,.24,0,.24,.53,0,0,.04,.06,.61,.33,.04,0,.45,.26,0,.03,.01,.4,.1,.16,.01,0,0,0,.21,.01,.95,.3,.31,0,0,.71,.83,.66,.4,0,0,.63,0,0,0,0,.52,0,.31,.15,0,0,0,0,.81,0,0,.19,.26,0,.11,.63,.96,.82,.05,0,.13,.24,.99,.42,0,.11,.03,.88,.63,.73,.04,0,0,.33,.99,.1,.68,.43,.29,.81,0,.02,.96,0,.08,0,0,0,.01,.19,0,.02,.12,.26,.5,.89,.04,.08,.03,.61,.4,0,.87,.31,.78,.83,0,.08,0,0,.9,.94,.27,.08,.2,.06,0,.56,.89,.16,.41,.06,.01,.01,.09,0,.27,0,.29,.58,0,0,.41,.6,0,.02,0,.38,.01,.67,0,0,0,0,.67,.01,.05,.67,.03,0,.05,.1,0,.01,.86,.01,.57,.68,.96,.02,.04,.64,.5,.21,.94,.68,0,.53,.01,.92,0,.13,.77,.25,.79,.51,0,0,0,0,.93,.86,.46,.18,0,.27,.43,0,0,.63,.51,.72,.01,.64,.63,0,.01,0,.42,.12,0,.2,.3,.06,.14,.01,.06,.1,0,.26,.12,.03,0,.61,.1,.04,.71,.56,.79,.82,.26,.04,.61,.05,.02,.22,.1,.76,.16,.02,0,.01,.17,.91,.23,.75,.25,0,0,.03,.66,.22,.82,.06,.86,.04,0,.88,.29,.16,.03,.19,0,.01,.26,.69,0,.31,.1,.95,.01,.13,.73,.4,0,.58,.09,0,.13,.18,.19,0,0,0,0,.75,0,0,.35,0,.06,.65,0,.49,0,.6,.13,.98,0,0,0,.1,0,.01,0,0,0,.9,0,.71,.07,.98,0,.42,.3,.03,.09,.84,.09,.86,.54,0,.97,.73,.31,.73,.34,.07,0,.38,0,.88,.26,.31,.41,.06,.02,.76,.33,.91,0,.15,.87,.01,.1,0,.9,.35,.1,.1,.09,0,0,0,.71,.03,0,.03,.06,.22,0,0,.2,.72,0,.05,.35,.22,.22,0,0,0,.8,0,.59,.62,.05,0,0,.08,0,.05,.02,.22,.71,.64,0,0,0,.83,.19,.25,0,0,.53,.27,.16,0,.19,0,.93,.16,.73,.24,.36,.12,0,.34,.53,.79,.15,.1,.21,.36,.12,.01,.12,.01,.34,.48,0,.01,0,0,0,.01,.48,.02,.1,0,0,0,.25,0,.05,.65,.33,.28,.83,0,.2,.47,0,0,.94,.1,.85,.7,.59,0,.47,0,.48,.17,.03,0,.91,.11,.09,.17,.66,.42,.06,.03,.98,0,.67,0,.12,.44,0,.69,.08,.67,.46,.96,.43,.01,.66,.09,.3,.08,.33,0,0,0,.66,.04,.22,.01,0,0,.39,.77,0,0,.03,.51,.16,.01,0,.01,0,.07,.04,0,.4,.41,0,.1,.57,.74,.8,.22,.85,.78,.11,.21,0,.04,.81,.24,.1,.06,0,0,0,0,.59,.64,.05,0,.5,.34,.75,.74,0,.74,0,.45,.18,.01,.01,0,.05,.99,0,.47,0,.02,.2,.58,.59,.12,.14,0,.73,.11,0,.11,.46,0,.13,0,.92,.78,.04,.04,.89,.75,.07,0,.46,0,0,.03,.12,0,0,0,.47,.3,.94,0,0,0,.17,.63,1,.21,0,0,.93,0,0,.6,.27,0,0,.31,.06,0,.28,.74,.12,.56,.01,.8,0,.06,0,.64,.86,.01,.06,0,.31,.26,.29,0,.39,.48,.13,0,0,0,.96,0,.01,.5,.19,0,.6,.59,0,.15,.04,.17,.01,.28,.16,0,.63,0,.52,.62,.01,.13,.81,.58,0,0,0,.78,.9,.03,.69,.02,0,.11,.05,.36,.01,.39,0,0,.11,.07,0,0,0,.02,.01,.85,.47,0,0,.41,.58,.92,.81,0,.24,0,.14,1,0,0,.77,.01,.64,.51,.75,0,1,.42,0,.38,.01,.33,.01,.01,.67,.37,.38,.12,.4,.96,.31,.36,.03,.01,.38,0,0,.15,.49,0,0,0,.57,.39,0,.95,.04,.06,.09,.18,0,.7,.14,.61,0,.05,.62,.02,0,0,0,.09,0,0,0,0,0,.13,.81,.78,.77,.75,.65,0,0,.01,.58,.88,.28,0,.27,.05,.89,.9,0,.03,.39,0,0,.56,.79,0,.01,0,0,.37,.24,.84,.01,0,0,0,0,0,0,.68,.34,0,.1,0,.04,.81,.02,.14,.22,0,0,.99,0,.1,.09,.16,.6,.32,0,.06,.28,.24,0,0,0,.62,.02,.77,0,.5,.01,.5,.23,.67,0,0,0,.1,.07,0,.16,.85,.06,.16,.2,0,.36,.05,.01,.01,0,.04,.72,0,.01,.2,.2,.13,0,.3,.47,.02,.24,.26,.87,0,.39,.94,.02,.9,0,.96,.01,.55,.85,0,0,.43,.54,0,0,0,.03,.48,0,0,0,0,0,0,0,0,.17,.05,.01,0,0,0,.23,.35,.43,.13,.03,.01,.16,.69,.26,.17,.94,.14,.48,.18,.2,.05,.28,0,.72,0,.01,0,0,0,0,.09,.26,0,.34,.14,.55,0,.18,0,.88,.02,0,.01,0,0,.05,.25,.69,0,0,.09,.01,.18,.36,.02,.38,.2,.09,.99,0,.01,.42,.24,.08,0,.08,.93,.08,.11,0,.93,.72,.34,.01,0,.17,0,.02,.07,.55,0,0,.64,.87,.88,.08,.02,.66,.95,.84,.77,.86,.57,0,.24,.31,.28,0,.53,.02,0,.01,.03,.52,.74,.03,0,.58,.48,.01,.01,.07,0,.01,0,.95,0,.01,.93,.05,0,.5,0,.8,.28,0,0,.23,0,.04,.07,.14,.35,.15,.39,.24,.01,.67,.94,0,.97,0,.38,.02,.29,.22,.61,.03,.03,0,.31,.16,.88,.86,.01,.03,0,0,.01,.02,.01,.46,.89,.06,.51,0,0,.19,0,.12,0,.44,0,.8,0,.31,.87,0,.66,0,.38,.24,0,0,.16,.3,.17,.97,0,.04,0,0,.05,.37,.09,.31,1,.6,.2,.77,0,0,.57,.46,0,.12,.95,1,.46,.09,0,.58,0,0,0,0,0,.18,.35,.05,0,0,0,0,.78,.09,.21,.37,.07,0,.17,0,.23,0,.62,.03,.04,0,0,0,.42,.98,.89,.24,.58,.02,0,.5,.88,.12,.44,.01,0,0,0,.01,.04,.01,.3,0,.03,0,.31,.47,.76,.04,.61,.64,.02,.49,0,.18,0,.08,.27,.01,.18,.2,0,.8,.12,0,.21,.63,.61,.03,.03,.27,0,.46,0,.65,0,0,0,0,.86,.21,.29,.27,.77,.65,.3,0,0,0,.02,0,.1,.09,0,.07,.01,.05,.6,0,.86,.32,.89,.19,.17,.01,0,.04,0,.06,.19,0,.01,.04,.84,.94,.44,0,0,.04,0,0,.4,.07,.27,.16,.08,0,.13,.45,.34,.48,.24,.51,.03,.19,.43,.02,.26,.24,0,0,.22,.02,.04,.88,.87,.02,.01,.45,.13,0,0,.75,.03,.72,0,.02,0,.61,0,.71,.44,.03,.27,.2,.4,.24,.67,.58,.55,0,.38,.01,0,.53,.76,.89,.38,.59,.21,.54,.07,0,.94,.6,.31,.94,0,0,.67,.33,.2,.6,.59,.41,0,0,.63,.87,.31,.95,.28,0,.02,.09,0,0,.12,0,.4,.58,.43,0,0,.3,.09,0,.53,.04,0,0,.17,0,.95,.24,0,0,.06,.14,.03,.83,.13,.07,.03,.45,0,.79,.88,.99,0,.79,0,.4,.03,0,0,0,.03,0,.75,.69,.2,.32,.13,0,0,0,.02,.79,.16,.65,.27,.43,.67,.01,.4,.14,.09,.19,.12,.74,0,.41,0,.78,.14,.33,.04,1,.79,.34,.16,0,0,0,.4,.83,.94,0,.14,.2,.2,.05,0,0,.64,.29,.03,.42,.01,.11,.01,.53,0,0,.18,.01,.32,.02,.08,0,.17,0,.93,.01,.25,.18,.07,.08,.44,.5,0,0,.53,.99,0,0,0,0,0,.42,.17,.1,.01,.49,.21,.14,.13,.53,.3,0,.62,0,0,0,.39,.02,.85,.03,0,.41,.31,.82,.3,.42,.01,.74,0,.01,.16,.71,.39,0,.99,.17,.56,.11,.71,.04,.23,0,.75,0,.33,.11,.88,.01,.91,.17,.15,.21,.88,.23,.2,.35,.05,0,.29,0,.01,.39,.78,.01,.32,.83,.81,0,.19,.02,.95,0,.84,.52,.34,.98,.04,0,0,.79,0,.4,.53,.16,0,.9,0,.31,.18,.48,.81,.13,.56,.03,0,.02,.06,.59,.03,.58,.92,.68,.06,.23,.73,.09,0,.2,.03,0,.55,.14,.88,.94,.35,.74,.02,.01,.18,.44,.62,.29,0,.29,.61,.45,0,.01,.65,.06,.01,.93,.01,0,.66,0,.33,.06,.02,0,0,.05,.67,0,.11,.79,.92,.46,.49,0,.5,0];export{a as pvalData};
