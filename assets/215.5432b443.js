const a=[0,.33,.29,.09,.82,0,.93,0,.98,.82,.2,.01,0,.24,.36,.07,.14,.67,0,.01,.89,0,.72,.18,.59,.59,.01,.22,.11,0,.09,.04,.39,0,.64,0,.51,.08,.46,.13,.95,.28,.02,.29,.01,.07,.15,.02,.01,.41,.18,0,.49,.56,0,.36,.23,0,.76,.83,0,.2,.07,.62,.23,.01,.1,.03,.51,.99,.92,.99,0,.01,.31,.07,.82,0,.97,.96,.88,.8,.31,.24,.58,0,.58,.28,.15,.45,0,.54,.15,.23,.31,.02,.44,0,.75,0,.72,.05,0,.5,.01,0,.3,0,.27,.03,0,.19,.56,.14,.43,.89,.69,.06,.64,.95,.19,0,0,.48,.15,.26,.65,.11,.44,.7,.01,.61,.63,.19,.05,0,0,1,.01,0,.09,0,.08,.33,0,.17,.25,0,.01,.67,.05,.1,.24,.01,.01,0,.22,0,.52,.25,.02,.01,.14,.38,.12,0,.09,.08,0,.57,0,.12,.01,.46,.85,.01,.43,0,0,.59,.68,.02,.99,.35,.02,0,.01,0,.01,.09,.62,0,.01,0,0,.34,.04,0,0,.09,.58,.2,.7,.01,.39,.01,.71,.01,0,0,.02,.3,.24,.57,0,.03,.6,.06,.02,0,.03,.07,.02,.25,.87,.92,0,.05,0,.06,.69,.75,.27,.47,0,0,.09,.07,.26,.81,0,.1,.21,0,.08,.38,.8,.1,.06,.25,0,0,0,.57,.1,.03,.03,.02,.05,1,.67,.06,.05,.13,.01,.01,.11,.19,.55,0,.46,.01,.91,.56,.42,.41,0,0,.39,.01,0,0,.62,.01,.03,.92,0,.98,0,.01,.44,.3,.83,.76,.11,.02,.31,0,.05,.11,.65,.86,.05,.15,0,.37,.15,0,0,.07,.3,.62,0,0,.28,.08,.07,.06,.32,.85,.32,.36,.19,.38,.3,.02,.16,.65,.6,.04,.24,.28,.27,.02,.01,.2,.09,0,.31,.04,.01,.4,.27,.45,.8,.26,.59,0,.54,.09,.01,0,0,.04,.43,.39,.12,.31,.1,.7,.05,.34,.1,0,.96,.44,0,.88,0,.8,.05,.55,.89,0,0,0,.04,.3,.87,0,.16,.26,.75,.65,.56,.21,.6,.93,.47,.5,.13,0,.27,.17,.02,.85,.01,.57,.22,.88,.17,.03,.12,.29,0,.35,.38,.19,.08,.17,.97,.04,.62,.18,0,.01,.24,1,0,0,0,.05,.89,0,.93,.98,.77,.01,.09,.18,.9,0,.57,0,0,.88,.43,.48,.65,0,0,.23,.08,0,.55,.01,.82,.98,.02,.62,.94,.01,.85,.46,.85,.12,0,.53,0,.43,.26,.13,.18,0,.83,.68,.52,.01,.71,.6,.01,.95,0,0,0,.67,.26,.39,.24,0,.01,.66,.08,.17,.13,.14,.07,.63,.71,.24,.83,.02,.13,.71,.02,.97,.42,.03,.42,.01,0,.02,.08,.36,.11,.17,0,.12,.62,0,.01,.01,.19,.4,.36,.19,0,.02,0,.36,.42,.46,.47,.14,0,0,.83,0,.53,.1,0,.48,.61,.01,0,0,.03,.24,.02,.25,.19,.08,0,0,.41,.25,0,0,.16,.18,0,.89,.49,.17,.18,0,.03,.43,.05,.79,.87,.03,.7,.03,.47,.16,.59,.01,0,0,.19,.33,.71,.39,.47,.78,.18,.01,.13,.69,.68,0,.02,0,.01,.19,.99,0,.26,.84,.04,.36,.49,.01,.3,0,.94,.91,0,.84,.64,.24,.45,0,.95,0,.01,.53,.05,.1,.64,.54,.04,0,0,.39,.89,.18,.06,0,.49,.25,.02,.77,.11,0,.82,.02,.01,.9,0,0,.01,0,.9,0,.47,0,0,0,0,.25,.11,.05,.77,.08,.06,.31,0,.03,0,.34,.38,.61,.6,.16,.2,.71,.02,.19,.86,.24,.56,0,.74,0,.29,.19,.1,.1,.65,.13,.81,0,0,.04,.05,.86,.89,0,.39,.02,.45,.03,0,0,.34,.48,.32,.01,.04,.36,.04,0,0,.79,0,0,.27,.35,.31,.21,.02,.3,.12,.02,.09,.05,0,0,.33,.24,.04,.28,.4,.58,.97,.7,.08,.76,.02,.04,.49,.01,.49,.01,0,0,0,.27,.42,.09,.48,.2,.03,0,.73,.45,.7,.11,.2,.31,.07,0,.17,.01,.79,.51,.8,0,0,.02,.98,0,.73,.04,.06,.63,0,.64,.5,0,.65,.25,.09,.9,.13,0,.04,0,.02,0,.28,0,0,.02,.63,.06,.8,0,.66,.02,.06,.13,.28,0,.01,0,.54,0,0,.51,.01,.06,.69,.03,.87,.05,.39,.01,.12,.02,0,.02,.03,.95,.33,.69,0,.26,.25,.45,.53,.22,.47,.14,0,0,.93,.83,0,0,.2,0,.02,.88,.75,0,.44,.03,.37,.61,0,.89,.72,.27,.4,.48,0,0,0,.5,0,.11,.81,.12,.02,.09,.06,.6,.63,.12,.03,.07,.97,.98,0,.16,.01,.59,0,.56,.05,.12,0,.03,.08,0,.58,.14,.58,.01,.39,0,0,0,.28,.71,.63,0,0,.16,.18,.12,.07,.23,0,.51,.04,.68,.46,0,0,0,.08,0,.15,0,.05,.56,.19,.85,.63,.73,0,.86,0,.01,0,0,0,0,.39,.92,0,.23,0,.02,.1,.24,0,0,.28,.18,.11,.43,0,.53,.44,.01,0,.82,.14,.37,.71,.52,0,.82,0,.45,0,.66,.41,.56,.05,.5,.25,.23,.3,.41,.47,.42,.78,.15,.03,.31,.28,.37,.29,.23,.45,.31,.48,.63,.06,.8,.72,.35,0,.85,0,0,.13,.51,.38,.26,.99,.08,0,.09,.44,.01,0,.07,.25,.5,.08,0,0,0,.6,.26,0,.5,.17,0,.9,.06,.51,.18,.41,.93,.49,.02,.01,.47,0,.01,.08,0,.36,0,.05,0,0,.89,.28,0,0,.97,.28,.11,.08,.01,.45,.7,.07,.21,0,.07,.24,0,.37,.09,.59,0,.34,.54,.54,.49,.28,.75,0,.6,.08,0,.01,.96,.01,.01,0,.09,.21,.75,0,.31,.89,.02,0,.88,0,0,.1,.28,0,.01,.16,.49,.77,.25,0,0,0,.78,.78,.99,.76,.08,0,.39,0,.01,.78,.63,0,.02,.58,.01,0,.29,.31,.3,.19,.01,.25,.02,.23,.66,.14,.57,.01,.06,0,.23,.66,.02,.45,.18,.1,.13,0,0,0,.05,.16,0,.08,.32,0,.8,.72,.13,0,0,.13,0,.42,.09,0,.78,.12,.26,.8,.01,0,.71,.38,.03,0,.08,.8,.05,.1,.81,.03,0,.42,.35,.06,.08,0,.06,0,.35,.01,.01,0,.02,0,0,.87,.97,0,.01,.51,.28,.49,.17,.07,.01,.47,0,.02,.06,.01,.1,.22,.16,.71,.33,.04,.24,.03,.12,.46,0,.71,.29,.68,.39,.26,.48,.66,.05,.26,0,.27,.04,.03,.63,.62,0,0,.16,.08,.01,.02,.11,.25,0,.2,0,0,.06,.94,.02,0,.39,.7,0,.1,.2,.11,0,0,0,.03,0,0,0,0,.79,.17,.99,.58,.15,.26,.03,0,0,.51,.53,.3,.05,0,.99,0,.85,.37,0,.3,.39,0,0,0,.01,.02,0,.04,.02,.13,.63,.01,.11,0,0,0,0,0,0,.89,.97,.02,.32,.11,.28,.59,0,.03,.49,0,0,.56,0,.71,0,.9,.75,.02,0,.37,.02,.06,0,.08,.06,.17,.03,.94,.01,.83,0,0,.85,.61,.02,0,.01,.99,.19,.06,.8,.08,.06,.21,.77,0,.5,.59,0,.05,.41,0,.65,.01,.02,.38,.12,.02,0,.09,.08,.19,.31,.17,.41,.01,.2,.16,0,.44,0,.47,.02,.94,.29,.02,0,0,.81,0,.05,0,.68,0,.01,.15,0,.01,.02,0,.01,0,.87,.32,.18,0,.03,.61,.63,.02,.36,.73,.77,.11,.37,.57,.45,0,.41,.07,.95,.86,.69,.62,.85,0,.16,0,.04,0,.06,0,0,.88,.66,0,0,.85,.26,.01,.11,.88,.14,.38,.04,0,.02,0,.02,.08,.18,0,.41,.06,.36,.57,.42,.01,.76,.84,0,.22,0,.4,.32,.62,.92,.01,.27,.04,.06,.17,0,.39,.28,.08,0,0,0,0,.28,.41,.25,0,.05,.24,.66,.77,.27,0,.99,.76,.98,.43,.53,.29,0,.47,.04,.39,.35,.04,.3,0,.04,.05,.08,.85,.07,0,.47,.92,.03,.01,.35,0,.07,0,.05,.15,.4,.04,.81,.14,.93,0,.85,.71,0,.14,.08,.03,.92,.07,.23,.06,.01,.96,.05,.74,.36,.99,0,.22,.09,.53,.32,.88,.08,.87,.58,.73,.06,.06,0,.38,.83,.6,.09,0,0,.46,0,.19,.83,.5,0,.1,.17,0,.05,.15,.61,.01,.72,0,.2,0,.63,.37,0,.31,.04,.08,.88,.91,0,.32,.54,.72,.54,.06,.1,0,0,.45,.72,.29,.99,.69,.54,.67,.03,.01,0,.46,.29,.09,.4,.22,.56,.86,.18,0,.51,.09,.01,.01,.08,.05,.78,.14,.04,.26,.04,.09,.34,.21,.55,.09,.42,.09,.2,.42,.11,1,.13,.14,.76,0,.27,.08,.13,.81,.11,.56,.67,.31,.12,.19,.52,.07,.93,.47,.02,0,.11,.18,.08,0,.12,.08,0,.85,.48,.01,.06,.59,.31,.47,.42,.04,0,.05,.02,.35,.09,.25,.18,.18,.29,.01,0,.03,.06,.32,.75,.58,.08,.2,.22,0,.41,.01,.01,.09,0,0,.05,.51,.67,.64,.07,.15,.06,.69,.07,.02,.06,.2,0,.8,.47,.17,0,.01,0,.07,.02,.28,.26,.42,.04,.97,0,.15,.93,.18,.36,.04,.12,.03,.46,.75,.1,.43,.2,0,.21,.21,.55,.72,.3,.76,.05,.19,.01,.21,.47,.22,.94,.3,.76,.91,.71,.12,.53,.07,.79,.07,.4,.27,.1,.07,.14,.34,0,0,.66,.38,.01,0,.27,.02,.08,.06,.18,.25,.67,0,.24,.84,0,.09,.91,.39,.13,.2,.27,.15,.02,.12,.09,0,.47,.94,.75,.4,.45,.21,.13,.06,.22,.37,.49,.72,.06,.01,.06,.03,.57,.99,.08,.72,.52,0,.08,.27,.33,.93,.55,.53,.01,.13,.2,.15,.03,.18,0,.2,.38,.66,0,.04,.13,0,.02,.5,.01,0,0,.02,.22,.38,.16,0,0,.11,.54,.05,.24,.98,.73,.03,.41,.03,.61,.46,.05,0,.72,0,.18,.59,0,.01,.14,.22,0,.83,.17,.38,.39,.32,0,0,.94,.01,.34,.2,.48,0,.86,.64,.02,.01,.82,.55,.16,.42,.93,0,.46,.07,.05,.08,.42,.14,0,.71,.16,0,0,.02,0,.91,.62,.43,.22,.37,.2,.68,.98,0,0,.85,.18,.05,.05,0,.74,0,.37,.01,.06,.07,.08,.83,0,.05,0,.31,0,.48,.06,.3,.79,.02,.02,.26,.35,0,0,.12,.39,.05,.08,.25,0,.04,.06,.01,.65,.02,.58,.19,.73,0,.17,.04,0,0,.01,.07,0,.94,.05,.01,.06,0,.9,.07,.52,.05,.22,0,.07,0,.22,.52,.5,.21,.41,.16,.8,.72,.26,.4,0,.02,.04,.61,.6,.55,0,.08,0,.44,.1,.62,.67,.18,.08,.44,.6,.52,0,.07,.02,0,.74,.05,.13,.39,.86,.18,0,.34,.92,.6,.18,.43,.02,.2,.35,.65,0,.06,.87,.03,.58,0,.08,.01,.49,0,.08,.18,.09,.41,.04,.62,0,.04,0,.1,.65,.16,.55,.52,.26,.29,.64,.35,.71,.98,.79,.84,0,.96,.97,.6,.51,.72,.86,.4,0,.24,.63,.45,.6,0,.98,.53,.27,0,.03,.92,.04,.07,.72,.14,0,.16,0,.23,.01,.27,.85,0,.05,.37,0,0,.32,.92,.3,.83,0,.03,0];export{a as pvalData};
