const a=[.39,.7,.11,.86,.37,.76,.7,.06,.96,0,.33,.55,.56,.31,.76,.34,.05,.36,.02,.57,.98,0,.29,.08,.17,.83,0,.43,.61,0,.63,0,.14,.08,0,.32,.74,.25,.52,0,.4,.42,.57,.39,.07,.4,0,0,0,.01,.17,.46,.12,.98,0,.52,.5,.02,.6,.98,.03,.04,.09,.51,.15,.01,.52,.15,.75,.63,.67,.18,.02,.8,.26,.43,.14,.01,.59,0,.14,.27,.48,.58,.17,0,.9,.27,.41,.55,.13,.94,.52,.48,.96,.28,.22,.74,.18,.01,.52,.33,.11,.44,.07,.04,.22,.07,.96,.03,.63,.06,.74,.32,.05,.85,.01,0,0,.43,.13,.53,.9,.89,0,.01,.6,.22,.07,1,.22,.64,.22,0,.6,.22,.02,.24,0,.53,.26,.44,.23,.98,.44,.01,.33,.36,.39,.53,.39,.26,.42,.07,.15,.37,.64,.95,.77,.36,0,.02,.19,.04,.52,0,.77,0,.84,.54,.66,.01,.1,0,.03,0,.9,0,0,.99,.26,.12,.22,.11,0,.98,.5,.86,.09,.9,.5,.13,.76,.04,.04,.64,.08,.27,.91,.02,.38,.95,.96,.45,.02,.08,.01,0,.13,.14,.08,.06,.84,.32,.02,.72,.98,.27,0,.01,.11,.14,.71,.55,.61,.79,.03,0,.07,0,.02,.67,.03,.02,.92,.65,.17,.63,.56,.17,.01,.08,.78,.02,.62,.98,.03,.28,.86,.08,0,.4,0,.87,.18,.33,.84,.08,.01,.09,.3,.26,.15,.16,.85,.08,.08,.79,.24,.1,.34,.94,.99,.03,.58,.68,0,0,.45,0,0,.01,.74,.84,.03,.9,.01,.58,0,.01,.23,0,.81,.66,.62,.46,.93,.27,.29,.01,.89,.49,.06,.04,.08,.15,.02,.05,.69,.9,.63,.59,.03,.72,.64,.01,.02,.59,.03,0,.44,.29,.07,.85,.01,.04,.43,.08,.59,.02,.46,.29,.21,.8,.01,.63,.06,.05,.82,0,.05,.7,.16,.1,.73,.14,.32,0,.67,.02,.03,0,.37,.03,.82,.64,.03,.39,.05,.17,.67,.16,.03,.01,.52,.63,.1,.78,.29,.71,.01,.53,.87,.54,.01,.21,.18,.19,.59,.07,.59,.83,.1,.23,.44,.23,.97,.99,.26,.2,.03,.98,.91,.01,.11,.55,0,.2,.01,.01,.36,.59,.08,.29,0,.52,.11,.09,.38,.72,.03,.29,.88,.05,.71,.68,.21,.8,0,.04,.35,.75,.01,.46,.41,.81,.31,.83,.01,.11,.98,.43,.48,.86,0,.49,.55,.56,.75,.01,.06,.59,.12,.7,.02,.95,.32,.34,.39,.06,.24,.07,.54,.94,.08,.3,0,.65,.43,.84,.1,.18,.81,0,.11,.24,.75,.17,.39,.78,.04,.92,.18,.33,.05,.95,.53,.88,.67,.01,.01,.44,.17,.62,0,.8,.01,.98,.72,.01,.14,.97,.34,.05,.1,.99,0,.55,.56,.26,.06,0,.01,.3,.29,.35,.33,.88,.6,.02,.11,.94,.1,.85,.02,.06,0,.27,0,.66,.67,.48,.96,.65,.89,.59,.68,.07,.02,.24,.01,0,.24,.01,.89,.02,.08,.31,.8,.55,.66,.19,.35,.01,0,.31,.05,0,.03,.91,.07,.81,.25,.02,.16,.02,.57,.27,.81,.7,.18,.03,.1,.23,.27,.33,.31,.92,0,.17,.05,.12,.64,.5,.24,.35,.43,.15,0,.59,0,.27,.01,.22,.01,.03,.67,.15,.02,.83,.13,.61,.37,.01,.21,.87,.29,.1,.27,.38,.71,.23,.12,.02,.09,0,.02,0,.76,.43,.81,.95,.99,.11,.9,.6,.56,.91,.25,.82,.75,.95,.81,.43,.42,.4,.67,.55,.07,.47,.73,.38,.15,0,.99,.11,.76,.02,.65,0,.73,.54,0,.31,.64,.4,.74,.48,.57,.01,.99,.44,.11,.78,.98,.62,.47,.58,.16,.25,.58,.54,.88,.08,.02,.5,.16,.52,.75,.78,.52,.59,.63,0,.1,.11,.31,.56,.35,.54,.64,.53,.18,.11,.72,.93,.91,.33,.71,.64,.06,.7,.59,.41,.24,.97,.06,.5,.01,.08,.49,.36,.11,.55,.61,.07,.04,.96,.7,0,.99,.17,0,.83,.67,.41,.73,.07,.43,.36,.15,.04,.69,.61,.73,.33,.79,0,.93,.06,.06,.13,.15,.52,.06,.01,.83,.16,.12,.2,.06,.18,0,0,.72,.09,.54,.86,.14,0,.74,0,.16,.3,.39,.2,.13,.01,.8,.25,.69,0,.96,.24,.01,.91,.56,.5,.51,.98,.36,.39,.73,.5,.04,.75,.02,.46,.9,.13,.09,.12,.1,.4,.03,.01,0,0,.96,0,0,.61,0,.15,.67,0,.81,.13,.22,.12,.54,.44,.61,.11,.76,.79,.32,.12,.03,.83,.61,.58,.21,0,.67,.43,.26,0,.52,.75,.6,.92,.31,.96,.25,.82,.19,.47,.14,.21,.78,.84,.23,.85,.75,.87,.45,.6,.18,0,.2,.8,.79,.18,0,.17,.02,0,.12,.19,.39,0,.21,.34,.69,.8,.17,.13,.24,0,.06,.59,.24,.76,.62,.03,.04,.58,.35,.27,.93,.77,.95,.03,.91,.03,.68,.98,.97,.19,.03,.75,.64,.21,.8,.1,.29,.51,.13,.86,.28,.91,.12,.01,.18,.47,.06,.75,.18,.82,.95,.8,.12,.26,.84,.94,.21,.01,.89,0,.43,0,0,0,0,.27,.43,.13,.11,.53,.71,0,.66,.27,.13,.15,.11,.35,.19,.36,.13,.17,.82,.23,.5,.49,0,.28,.4,.52,.41,.09,.16,.93,.73,.53,.54,.57,.07,.51,.97,.21,.81,.01,.07,.57,.64,.64,.28,.23,.87,.46,.78,.03,.02,.7,.84,.15,.08,.14,.71,.15,.19,.7,.32,.08,.46,.13,0,.46,.73,0,0,.35,.78,.78,.35,.64,1,.09,.4,.48,.01,.58,.03,.01,.99,.7,.07,.3,.8,.45,.58,.33,.75,.03,.92,.98,.81,.44,.03,.01,.9,.01,.43,.46,.41,.4,.71,.05,.46,.28,.07,0,.67,.63,.14,.37,.64,.44,.06,.24,.14,.05,.32,.05,.28,.72,.8,.97,.39,.55,0,.3,.41,.05,.33,.67,.86,.26,.16,.61,.23,.25,.14,.22,.77,.8,.5,.98,.02,.72,.01,.09,0,.69,0,.51,.15,.58,0,0,.33,.3,.08,.63,.49,.17,.1,.52,.22,0,.65,.46,0,.05,.76,.82,0,.87,.39,.17,.33,0,.01,.03,.35,.83,.48,.78,.32,.27,0,.92,.12,.1,.91,.23,.41,.7,.48,0,0,.8,.03,.12,.54,.1,.1,.88,.01,.18,.42,.71,.05,.3,.77,.03,.13,.87,.18,.44,.6,.65,.2,.24,.68,.03,.79,.51,.67,.03,.45,.45,.16,.5,.65,.99,.01,.93,.02,.29,0,.06,.64,.05,.61,.19,.39,.58,.36,.36,.53,.01,.7,.8,.88,.04,.03,.16,0,.83,.02,.06,.01,.1,.66,.3,.52,.66,.23,.88,.26,0,.26,.57,.67,.59,.16,.06,.72,.5,.11,.34,.65,.93,.03,.03,.08,.01,0,.17,.12,.37,.45,.04,.16,.08,0,.04,.14,.59,.91,.04,.7,.23,.31,.44,.14,.56,.12,.3,.75,.53,.28,.11,.56,0,.66,.16,.02,.02,.04,.04,.19,.99,.93,.35,.82,.43,.64,.91,.14,.56,.47,.34,.86,.73,.22,.48,.48,.16,.08,.15,.81,.24,.01,.31,.91,.01,.25,.28,.37,.26,.01,.08,0,0,.07,.83,.85,.49,.3,.01,.01,.47,.78,.12,.16,.19,.03,.57,.98,0,.84,.54,.38,.1,.19,.66,.12,.9,.11,.01,.01,.03,.1,.04,.55,0,1,.16,.04,.64,.05,.67,0,.04,.77,.61,.02,.26,.42,0,.37,.49,0,.94,.93,.47,.29,.71,.99,.25,.01,.93,.02,.21,0,.02,.75,.61,.02,.44,.67,.37,.1,.71,.11,.06,.18,.78,.8,0,.7,.51,.14,.01,.66,.07,0,.06,.22,.69,.84,.03,.01,.02,.19,.08,.05,.13,.94,.24,.2,.97,.27,.02,.05,.03,0,.75,.31,.5,.12,.7,.82,.08,.07,.52,.03,.56,.68,.24,.31,.92,.96,.2,.01,.43,.26,.24,.12,.01,.94,0,.18,.26,.28,.05,.03,.62,.83,.07,.64,.17,.6,.03,.1,.62,.07,.03,.17,.56,.69,.39,.08,.03,1,.9,.04,.91,.01,0,.19,.28,.22,.45,.19,.2,.61,.32,.27,.2,.19,.9,.85,.93,.03,.5,.06,.82,.22,.37,.24,.74,.12,.19,.22,.82,.82,.41,.75,.45,.43,.87,.06,0,0,.62,.57,.05,.65,.12,0,.39,.42,.94,.24,.23,.01,.59,1,.01,.02,.4,.02,.22,.02,.68,.08,.27,.32,.78,.21,.91,.01,.48,.99,.03,.2,.11,.12,.09,.88,.3,.98,.98,.12,.56,.07,.23,.25,.04,.76,.05,.29,.22,.33,.27,.23,.24,.06,.12,.85,.39,.16,.27,.4,.18,.05,.08,.14,0,.94,.46,.18,.92,.55,.01,.48,.14,.01,.58,.07,.53,.05,.43,.01,.62,.29,.01,.01,.09,.09,.93,.31,0,.39,.93,.33,.32,.12,.03,.83,.14,.53,.58,.44,.45,.9,.78,.15,.03,.06,0,.68,.01,.08,.27,.26,.02,.61,.38,.48,.66,.02,.02,.01,.09,0,.97,.11,.01,.17,.15,.01,.67,.03,.81,.07,0,.05,.03,.31,.05,.83,0,.05,.6,.2,.39,.37,.84,.95,.03,.3,.03,.1,.63,.1,.02,.84,.19,.83,.69,0,.11,.12,.2,.43,.32,.05,.01,.52,0,.94,.27,.06,.06,.15,.82,.42,.15,.06,.87,.01,.09,.82,.13,.69,.35,.39,.39,.86,0,.96,.46,.32,.25,.04,.84,.3,.08,.45,.66,0,.21,.05,0,.49,.79,.57,.06,.13,.01,.07,.01,.02,.05,.2,.01,.07,.77,.16,.45,.01,.31,.05,.08,.67,.31,.99,.36,.09,0,.02,.09,.22,.24,.92,0,.52,.97,.46,.07,.3,.09,0,.28,.22,.27,.49,.42,.6,.81,.99,.33,.85,.04,.04,.39,0,.01,.01,.54,.14,.47,.01,.49,.02,.01,.77,.18,.3,.62,.23,.88,0,.31,.52,.75,0,.25,.03,.77,.12,.15,.02,.45,.59,.71,.72,.72,.1,.92,.24,.06,.27,.22,.42,.02,.5,.29,.03,.97,.13,.92,.56,.79,.3,.07,.91,.62,.52,.59,.15,.16,.03,.01,.84,.35,.43,.98,.03,.93,.01,.01,.82,.66,.47,.61,.29,.43,.56,.58,.43,.01,.29,.12,.8,.4,.6,.02,.02,.07,.03,.03,.58,.05,.11,0,.05,.73,.42,.64,.01,.82,.96,.74,.36,.01,.26,.75,.14,.99,.02,.94,.9,.31,.12,.44,0,.77,.88,.04,.4,.24,.47,.11,.11,.93,.78,.38,.94,.54,.26,.68,0,.87,.85,.34,.55,.12,.23,0,.03,.11,.89,.97,.73,.06,.12,.84,.26,.24,.11,.81,.09,.84,.26,.72,.87,0,.01,0,.72,.47,.18,.02,.37,.97,.74,.46,0,0,.03,.06,.47,.7,.42,.17,.33,.71,.06,.24,.82,.71,.67,.03,.31,0,.08,.36,.33,.91,.28,.28,.86,.84,.48,.18,.09,.28,.15,.29,0,.01,.97,0,.19,.39,0,.18,.03,.6,.97,.23,.23,.92,.28,.02,.78,.06,.94,.68,.96,.31,.34,.77,.14,.4,.99,.36,.58,.81,.15,.58,.13,.19,.78,.74,.04,0,.04,.28,.91,.73,.44,.73,0,.01,.37,.32,.01,.34,.71,.16,.23,.8,.21,.52,.69,.21,.44,.07,.06,.12,.34,.45,.04,.08,.13,.88,.36,.31,.32,.01,.66,.03,.01,0,.66,.01,.01,.21,.38,.03,.7,.16,.01,.57,.6,.09,.05,.51,.32,.67,.68,.71,.6,.14,.88,.91,.21,.2,.07,.14,.49,.49,.1,.87,.53,.85,.36,.63,0,.86,.09,.09,.99,.94,.67,.72,.81,.36,.35,.07,.91,.93,.12,.67,.52,.54,.43,.23,.05,.82,.25,.41,.31,.17,0,.02,.22,0,.73,.74,.08,.35,0,.83,.64,0,.64,.99,.36,0,.86,.65,.09,.09];export{a as pvalData};
